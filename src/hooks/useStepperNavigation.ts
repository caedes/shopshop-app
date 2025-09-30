import { useNavigate, useSearchParams } from "react-router";

type useStepperNavigationProps = {
  stepSearchParamName?: string;
  path: string;
};

export const useStepperNavigation = ({
  stepSearchParamName = "step",
  path,
}: useStepperNavigationProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const stepSearchParam = parseInt(
    searchParams.get(stepSearchParamName) || "1",
    10
  );
  const step =
    stepSearchParam === 0 || isNaN(stepSearchParam) ? 1 : stepSearchParam;

  const navigateToNextStep = () =>
    navigate(`${path}?${stepSearchParamName}=${step + 1}`);

  return { step, navigateToNextStep };
};
