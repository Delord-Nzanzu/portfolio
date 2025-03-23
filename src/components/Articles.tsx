import { Card, Divider, Grid2, Typography } from "@mui/material";
import React from "react";
import { dataArticle } from "../data/Data";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <Grid2 container sx={{ bgcolor: "#232329", p: 1 }}>
      <Grid2
        size={{
          xs: 12,
          sm: 12,
          md: 12,
        }}>
        <Typography
          sx={{
            fontFamily: "Courier Prime",
            fontSize: 40,
            color: "#fff",
            fontWeight: 700,
            textAlign: "center",
          }}>
          Dernières Écrites
        </Typography>
        <Divider sx={{ bgcolor: "#fff" }} />
        {dataArticle.map((e) => (
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            key={e.id}
            target="_blank"
            rel="noopener noreferrer"
            to={`${e.link}`}>
            <Card
              key={e.id}
              sx={{
                bgcolor: "#232329",
                p: 2,
                m: 1,
                mt: 2,
                ":hover": {
                  bgcolor: "#fff",
                  cursor: "pointer",
                },
              }}>
              <Typography
                sx={{
                  fontFamily: "Courier Prime",
                  fontSize: 25,
                  color: "#fff",
                  fontWeight: "bold",
                }}>
                {e.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Courier Prime",
                  fontSize: 16,
                  color: "gray",
                }}>
                {e.description}
              </Typography>
            </Card>
          </Link>
        ))}
      </Grid2>
    </Grid2>
  );
};

export default Articles;
