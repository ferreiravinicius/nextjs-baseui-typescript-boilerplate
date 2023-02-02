import { Button, KIND, SHAPE, SIZE } from "baseui/button";
import { Heading, HeadingLevel } from "baseui/heading";
import { Cell, Grid } from "baseui/layout-grid";
import { ParagraphSmall } from "baseui/typography";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid>
        <Cell span={12}>
          <HeadingLevel>
            <Heading>Boilerplate Next + BaseWeb </Heading>
            <ParagraphSmall>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum fermentum velit ante, ac fringilla nulla pulvinar in.
              Aenean ut nisi mattis, lobortis purus vel, aliquet ante. In vel
              viverra lectus. Vivamus a diam faucibus, rutrum quam a, varius
              felis. Sed pellentesque sodales libero commodo vestibulum.
              Phasellus convallis gravida tempor. Sed ut bibendum nisl.
            </ParagraphSmall>
            <Button
              onClick={() => alert("click")}
              kind={KIND.primary}
              size={SIZE.mini}
              shape={SHAPE.default}
            >
              Click
            </Button>
          </HeadingLevel>
        </Cell>
      </Grid>
    </>
  );
}
