/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { AllDataTypes } from "../../data/data";
import Subtitle from "./Subtitle";
import CardSlider from "./programs/CardSlider";

type ProgramsProps = {
  data: AllDataTypes;
};

export default function Programs(props: ProgramsProps) {
  const programs = props.data.programs;
  const subtitle = props.data.subtitle;

  const theme = useTheme();
  const styles = css`
    padding: 71px 0 0 0;

    @media (min-width: ${theme.breakpoints.desktop}) {
      padding: 121px 189px 0;
    }
  `;
  return (
    <div css={styles}>
      <Subtitle data={subtitle} type="programs" />
      <CardSlider data={programs} />
    </div>
  );
}
