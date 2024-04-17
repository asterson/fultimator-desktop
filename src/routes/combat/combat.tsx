import {
  Autocomplete,
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Skeleton,
  TextField,
  Typography,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import { Download } from "@mui/icons-material";
import { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, orderBy, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { User } from "firebase/auth";

import { SignIn } from "../../components/auth";
import { auth, firestore } from "../../firebase";
import Layout from "../../components/Layout";
import NpcPretty from "../../components/npc/Pretty";
import { calcHP, calcMP } from "../../libs/npcs";
import { useEffect } from "react";
import React from "react";
import { TypeNpc } from "../../types/Npcs";
import useDownloadImage from "../../hooks/useDownloadImage";
import { useTranslate } from "../../translation/translate";

export default function Combat() {
  const { t } = useTranslate();
  const [user, loading, error] = useAuthState(auth);
  console.debug("user, loading, error", user, loading, error);

  return (
    <Layout>
      <Typography variant="h4">{t("Combat")}</Typography>
      {loading && <Skeleton />}

      {!loading && !user && (
        <>
          <Typography sx={{ my: 1 }}>
            {t("You must be logged in to use this feature")}
          </Typography>
          <SignIn />
        </>
      )}

      {user && <AuthCombat user={user} />}
    </Layout>
  );
}

interface AuthCombatProps {
  user: User;
}

function AuthCombat({ user }: AuthCombatProps) {
  const { t } = useTranslate();
  const personalRef = collection(firestore, "npc-personal");
  const personalQuery = query(
    personalRef,
    where("uid", "==", user.uid),
    orderBy("lvl", "asc"),
    orderBy("name", "asc")
  );
  const [personalList, loading] = useCollectionData(personalQuery, {
    idField: "id",
  });

  const [npcs, setNpcs] = useState<TypeNpc[]>([]);

  const addNpc = (e: any, newValue: any) => {
    setNpcs((prevState) => {
      return newValue ? [...prevState, newValue as TypeNpc] : prevState;
    });
  };

  if (loading) {
    return null;
  }

  // Add label
  personalList?.forEach((npc) => {
    npc.label = npc.name;
  });

  console.debug(npcs);

  return (
    <Grid container sx={{ mt: 2 }}>
      {npcs?.map((npc) => {
        if (!npc) {
          return null;
        }
        return (
          <Grid item xs={12} key={npc.id}>
            <NpcCombatant npc={npc}></NpcCombatant>
          </Grid>
        );
      })}
      <Grid item xs={12}>
        <Autocomplete
          size="small"
          disablePortal
          id="combo-box-demo"
          options={personalList || []}
          sx={{ width: 300, mb: 10 }}
          onChange={addNpc}
          renderInput={(params) => (
            <TextField {...params} label={t("Adversary")} />
          )}
        />
      </Grid>
    </Grid>
  );
}

interface NpcProps {
  npc: TypeNpc;
}

function NpcCombatant({ npc }: NpcProps) {
  const { t } = useTranslate();
  const [hp, setHp] = useState(calcHP(npc));
  const [mp, setMp] = useState(calcMP(npc));
  const [attributes, setAttributes] = useState(npc.attributes);
  const [statusEffects, setStatusEffects] = useState({
    slow: false,
    dazed: false,
    weak: false,
    shaken: false,
    enraged: false,
    poisoned: false,
  });

  const originalAttributes = npc.attributes;

  const changeHp = (value: number) => {
    return () => {
      setHp(hp + value);
    };
  };
  const changeMp = (value: number) => {
    return () => {
      setMp(mp + value);
    };
  };

  const adjustAttribute = (attribute = 0, amount = 0, min = 6) => {
    return attribute + amount <= min ? min : attribute + amount;
  };

  useEffect(() => {
    let { slow, dazed, weak, shaken, enraged, poisoned } = statusEffects;

    setAttributes({
      dexterity:
        enraged && slow
          ? adjustAttribute(originalAttributes.dexterity, -4)
          : enraged || slow
          ? adjustAttribute(originalAttributes.dexterity, -2)
          : originalAttributes.dexterity,
      insight:
        enraged && dazed
          ? adjustAttribute(originalAttributes.insight, -4)
          : enraged || dazed
          ? adjustAttribute(originalAttributes.insight, -2)
          : originalAttributes.insight,
      might:
        poisoned && weak
          ? adjustAttribute(originalAttributes.might, -4)
          : poisoned || weak
          ? adjustAttribute(originalAttributes.might, -2)
          : originalAttributes.might,
      will:
        poisoned && shaken
          ? adjustAttribute(originalAttributes.will, -4)
          : poisoned || shaken
          ? adjustAttribute(originalAttributes.will, -2)
          : originalAttributes.will,
    });
  }, [
    statusEffects,
    originalAttributes.dexterity,
    originalAttributes.insight,
    originalAttributes.might,
    originalAttributes.will,
  ]);

  const toggleStatus = (status = "", hasStatus = false) => {
    switch (status) {
      case "slow":
        setStatusEffects((s) => ({
          ...s,
          slow: hasStatus,
        }));
        break;
      case "dazed":
        setStatusEffects((s) => ({
          ...s,
          dazed: hasStatus,
        }));
        break;
      case "weak":
        setStatusEffects((s) => ({
          ...s,
          weak: hasStatus,
        }));
        break;
      case "shaken":
        setStatusEffects((s) => ({
          ...s,
          shaken: hasStatus,
        }));
        break;
      case "enraged":
        setStatusEffects((s) => ({
          ...s,
          enraged: hasStatus,
        }));
        break;
      case "poisoned":
        setStatusEffects((s) => ({
          ...s,
          poisoned: hasStatus,
        }));
        break;
      default:
        break;
    }
  };

  const crisis = hp < calcHP(npc) / 2;

  const [selectedStudy, setSelectedStudy] = useState(0);

  const handleStudyChange = (event) => {
    setSelectedStudy(event.target.value);
  };

  const ref = useRef();
  const [downloadImage] = useDownloadImage(npc.name, ref);

  return (
    <Grid container spacing={1} sx={{ my: 1 }}>
      <Grid item xs={6}>
        <NpcPretty npc={npc} study={selectedStudy} ref={ref} collapse={true} includeImage={false} />
      </Grid>
      <Grid xs={6} item>
        <Grid container spacing={1} rowSpacing={2} sx={{ px: 2 }}>
          <Grid item xs={2}>
            <Typography variant="h5" color="red">
              {t("HP:")} {hp}
            </Typography>
            {crisis && t("Crisis!")}
          </Grid>
          <Grid item xs={5}>
            <ButtonGroup variant="outlined" size="small" color="error">
              <Button onClick={changeHp(-1)}>-1</Button>
              <Button onClick={changeHp(-2)}>-2</Button>
              <Button onClick={changeHp(-5)}>-5</Button>
              <Button onClick={changeHp(-10)}>-10</Button>
              <Button onClick={changeHp(-20)}>-20</Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={5}>
            <ButtonGroup variant="outlined" size="small" color="error">
              <Button onClick={changeHp(+1)}>+1</Button>
              <Button onClick={changeHp(+2)}>+2</Button>
              <Button onClick={changeHp(+5)}>+5</Button>
              <Button onClick={changeHp(+10)}>+10</Button>
              <Button onClick={changeHp(+20)}>+20</Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" color="cyan">
              {t("MP:")} {mp}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <ButtonGroup variant="outlined" size="small" color="info">
              <Button onClick={changeMp(-1)}>-1</Button>
              <Button onClick={changeMp(-2)}>-2</Button>
              <Button onClick={changeMp(-5)}>-5</Button>
              <Button onClick={changeMp(-10)}>-10</Button>
              <Button onClick={changeMp(-20)}>-20</Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={5}>
            <ButtonGroup variant="outlined" size="small" color="info">
              <Button onClick={changeMp(+1)}>+1</Button>
              <Button onClick={changeMp(+2)}>+2</Button>
              <Button onClick={changeMp(+5)}>+5</Button>
              <Button onClick={changeMp(+10)}>+10</Button>
              <Button onClick={changeMp(+20)}>+20</Button>
            </ButtonGroup>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs>
              <Typography variant="h5">
                {t("DEX:")} d{attributes.dexterity}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="h5">
                {t("INS:")} d{attributes.insight}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="h5">
                {t("MIG:")} d{attributes.might}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="h5">
                {t("WIL:")} d{attributes.will}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={2}>
              <Typography variant="h5">{t("Study Roll:")}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Select
                labelId="study"
                id="study"
                value={selectedStudy}
                onChange={handleStudyChange}
                fullWidth
              >
                <MenuItem value={0}>-</MenuItem>
                <MenuItem value={1}>7+</MenuItem>
                <MenuItem value={2}>10+</MenuItem>
                <MenuItem value={3}>13+</MenuItem>
              </Select>
            </Grid>
            {/* Download Button */}
            <Button
              color="primary"
              aria-label="download"
              onClick={downloadImage}
              style={{ cursor: "pointer" }}
            >
              <Tooltip title="Download Sheet" placement="bottom">
                <Download />
              </Tooltip>
            </Button>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs>
              <FormControlLabel
                value="slow"
                control={
                  <Checkbox
                    onChange={({ target: { value, checked } }) => {
                      if (typeof checked === "boolean") {
                        toggleStatus(value, checked);
                      }
                    }}
                  />
                }
                label={t("Slow")}
                labelPlacement="top"
              />
            </Grid>
            <Grid item xs>
              <FormControlLabel
                value="dazed"
                control={
                  <Checkbox
                    onChange={({ target: { value, checked } }) => {
                      if (typeof checked === "boolean") {
                        toggleStatus(value, checked);
                      }
                    }}
                  />
                }
                label={t("Dazed")}
                labelPlacement="top"
              />
            </Grid>
            <Grid item xs>
              <FormControlLabel
                value="weak"
                control={
                  <Checkbox
                    onChange={({ target: { value, checked } }) => {
                      if (typeof checked === "boolean") {
                        toggleStatus(value, checked);
                      }
                    }}
                  />
                }
                label={t("Weak")}
                labelPlacement="top"
              />
            </Grid>
            <Grid item xs>
              <FormControlLabel
                value="shaken"
                control={
                  <Checkbox
                    onChange={({ target: { value, checked } }) => {
                      if (typeof checked === "boolean") {
                        toggleStatus(value, checked);
                      }
                    }}
                  />
                }
                label={t("Shaken")}
                labelPlacement="top"
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs display="flex" justifyContent="center">
              <FormControlLabel
                value="enraged"
                control={
                  <Checkbox
                    onChange={({ target: { value, checked } }) => {
                      if (typeof checked === "boolean") {
                        toggleStatus(value, checked);
                      }
                    }}
                  />
                }
                label={t("Enraged")}
                labelPlacement="top"
              />
            </Grid>
            <Grid item xs display="flex" justifyContent="center">
              <FormControlLabel
                value="poisoned"
                control={
                  <Checkbox
                    onChange={({ target: { value, checked } }) => {
                      if (typeof checked === "boolean") {
                        toggleStatus(value, checked);
                      }
                    }}
                  />
                }
                label={t("Poisoned")}
                labelPlacement="top"
              />
            </Grid>
          </Grid>
          <Grid item flex="1"></Grid>
        </Grid>
      </Grid>
      <Divider flexItem sx={{ p: 1, my: 2, width: "100%" }} />
    </Grid>
  );
}
