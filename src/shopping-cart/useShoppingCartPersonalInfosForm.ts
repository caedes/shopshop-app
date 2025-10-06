import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const PersonalInfosSchema = z.object({
  firstName: z.string().min(3, "First name is required"),
  lastName: z.string().min(3, "Last name is required"),
});

type PersonalInfos = z.infer<typeof PersonalInfosSchema>;

type useShoppingCartPersonalInfosFormProps = {
  navigateToNextStep: () => void;
};

export const useShoppingCartPersonalInfosForm = ({
  navigateToNextStep,
}: useShoppingCartPersonalInfosFormProps) => {
  const form = useForm<PersonalInfos>({
    resolver: zodResolver(PersonalInfosSchema),
  });

  const handlePersonalInfosSubmit = (personalInfos: PersonalInfos) => {
    console.log("personalInfos:", personalInfos);
    navigateToNextStep();
  };

  const { control: personalInfosControl, handleSubmit } = form;

  const savePersonalInfos = handleSubmit(handlePersonalInfosSubmit);

  return { personalInfosControl, savePersonalInfos };
};
