import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputComponent from "src/components/Input";

// Zod 스키마 정의
const schema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters long"),
});

type FormData = z.infer<typeof schema>;

const MyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data); // 폼 제출 시 데이터 출력
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">Username</label>
        <InputComponent className="bg-red-400" type="check" />
        <input id="username" {...register("username")} />
        {errors.username && <p>{errors.username.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
