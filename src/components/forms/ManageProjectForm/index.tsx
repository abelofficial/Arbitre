import React from "react";
import { useForm } from "react-hook-form";
import { IProjectFormValues, projectFormSchemaResolver } from "./helper";
import { zodResolver } from "@hookform/resolvers/zod";
import * as styles from "./styles";
import {
  Button,
  Form,
  FormErrorMsg,
  MultiTextInput,
  Paragraph,
} from "@styles/common";
import Spinner from "@components/icon/Spinner";

export interface ManageProjectFormProps {
  isSubmitting: boolean;
  mode: "create" | "update";
  onClose: () => void;
  onSubmitAsync: (p: IProjectFormValues) => Promise<void>;
  defaultValues?: IProjectFormValues;
}

const ManageProjectForm = ({
  mode,
  onClose,
  onSubmitAsync,
  isSubmitting,
  defaultValues,
}: ManageProjectFormProps) => {
  const {
    formState: { errors, isValidating },
    ...form
  } = useForm<IProjectFormValues>({
    resolver: zodResolver(projectFormSchemaResolver),
    defaultValues,
  });

  const onSubmitHandler = async (data: IProjectFormValues) => {
    await onSubmitAsync(
      defaultValues ? { id: defaultValues.id, ...data } : data
    );

    onClose();
  };

  const closeModal = () => {
    form.reset();
    onClose();
  };

  const loading = isValidating || isSubmitting;
  return (
    <Form onSubmit={form.handleSubmit(onSubmitHandler)}>
      <styles.InputContainer>
        <styles.Label htmlFor='name'>Name</styles.Label>
        <styles.Input type='text' {...form.register("name")} />
        {errors.name && (
          <Paragraph>
            <FormErrorMsg>{errors.name.message} </FormErrorMsg>
          </Paragraph>
        )}
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.Label htmlFor='description'>Description</styles.Label>
        <MultiTextInput {...form.register("description")} />
        {errors.description && (
          <Paragraph>
            <FormErrorMsg>{errors.description.message}</FormErrorMsg>
          </Paragraph>
        )}
      </styles.InputContainer>

      <styles.ButtonContainer>
        <Button type='submit' disabled={loading}>
          {loading && <Spinner />}
          {mode}
        </Button>
        <Button disabled={loading} onClick={closeModal} type='button'>
          Cancel
        </Button>
      </styles.ButtonContainer>
    </Form>
  );
};

export default ManageProjectForm;
