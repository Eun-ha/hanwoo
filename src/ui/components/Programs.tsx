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
    @media (min-width: ${theme.breakpoints.tablet}) {
      position: relative;
      max-width: 1542px;
      margin: 121px auto 0;
    }
  `;
  return (
    <div css={styles}>
      <Subtitle data={subtitle} type="programs" />
      <CardSlider data={programs} />
    </div>
  );
}
