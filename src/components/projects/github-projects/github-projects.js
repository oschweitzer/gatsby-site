import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import { graphql, StaticQuery } from "gatsby";
import React from "react";
import styles from "../../navigation-cards/navigation-cards.module.css";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        github {
          viewer {
            repositories(first: 50, privacy: PUBLIC, isFork: false) {
              nodes {
                name
                description
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Grid container justify="center" spacing={2}>
        {data.github.viewer.repositories.nodes.map(repo => (
          <Grid item xs={3}>
            <Card>
              <CardHeader
                className={styles.cardHeader}
                title={repo.name}
                titleTypographyProps={{ variant: "h5" }}
              ></CardHeader>
              <CardContent className={styles.cardContent}>
                {repo.description}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    )}
  />
);
