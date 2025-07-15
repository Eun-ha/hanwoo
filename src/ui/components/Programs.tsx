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
    margin-top: 71px;

    @media (min-width: ${theme.breakpoints.desktop}) {
      margin-top: 121px;

      padding: 0 189px;
    }
  `;
  return (
    <div css={styles}>
      <Subtitle data={subtitle} type="programs" />
      <CardSlider data={programs} />
    </div>
  );
}
