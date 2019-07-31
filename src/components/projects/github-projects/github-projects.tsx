import { Card, CardContent, CardHeader, Chip, Grid } from "@material-ui/core";
import { graphql, StaticQuery } from "gatsby";
import React from "react";
import * as navigationStyles from "../../navigation-cards/navigation-cards.module.css";
import * as styles from "./github-projects.module.css";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        github {
          viewer {
            repositories(
              first: 50
              privacy: PUBLIC
              isFork: false
              ownerAffiliations: OWNER
              orderBy: { field: NAME, direction: ASC }
            ) {
              nodes {
                name
                description
                url
                repositoryTopics(first: 20) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Grid container justify="center" spacing={3}>
        {data.github.viewer.repositories.nodes.map(repo => (
          <Grid item key={repo.name} xs={3}>
            <a href={repo.url} style={{ textDecoration: "none" }}>
              <Card className={styles.projectCard}>
                <CardHeader
                  className={navigationStyles.cardHeader}
                  title={repo.name}
                  titleTypographyProps={{ variant: "h5" }}
                ></CardHeader>
                <CardContent className={navigationStyles.cardContent}>
                  {repo.description}
                  <Grid item xs={12}>
                    {repo.repositoryTopics.nodes.map(topic => (
                      <Chip
                        key={topic.topic.name}
                        label={topic.topic.name}
                        className={styles.projectChip}
                        color="primary"
                      ></Chip>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
    )}
  />
);
