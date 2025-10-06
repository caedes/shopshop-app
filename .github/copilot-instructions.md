## Enum TypeScript / JavaScript

Lorsque je te demande une enum en TS/JS, tu dois utiliser la structure suivante, pour pouvoir utiliser facilement en tant un objet JavaScript pour l’énumération et avoir le bon typage déduit en TypeScript :

```typescript
export const Languages = {
  FR: "fr",
  EN: "en",
} as const;

export type Language = (typeof Languages)[keyof typeof Languages];
```

## React Hook Form

Lorsque je te demande un formulaire utilisant React Hook Form, tu dois utiliser la structure suivante, qui n'expose que des fonctions personnalisées correctement nommées en accord avec mon business, et pas le `form` entier :

```typescript
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
```
