import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// validação com Zod
const schema = z.object({
  fullName: z.string().min(1, "Nome completo é obrigatório"),
  email: z.string().email("Formato de e-mail inválido"),
  phone: z.string().min(10, "Número de telefone é obrigatório"),
  position: z.enum(
    [
      "Desenvolvedor Frontend",
      "Desenvolvedor Backend",
      "Desenvolvedor Full Stack",
      "Desenvolvedor Mobile",
      "Desenvolvedor de Software",
      "Engenheiro de Software",
      "Arquiteto de Software",
      "UI/UX Designer",
      "Analista de Sistemas",
      "Analista Programador",
      "DevOps Engineer",
      "Engenheiro de Dados",
      "QA Engineer",
      "Scrum Master",
      "Product Owner",
    ],
    "Cargo pretendido é obrigatório"
  ),
  linkedin: z.string().optional(),
  github: z.string().optional(),
});

const MemberForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    try {
      localStorage.setItem("memberData", JSON.stringify(data));
      alert("Cadastro realizado com sucesso!");
      reset();
    } catch (error) {
      alert("Falha ao cadastrar. Verifique os dados informados.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white border border-purple-700 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">
        Cadastro de Membros
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Nome Completo</label>
          <input
            type="text"
            {...register("fullName")}
            className="w-full p-2 border border-purple-700 rounded"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">E-mail</label>
          <input
            type="email"
            {...register("email")}
            className="w-full p-2 border border-purple-700 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Telefone</label>
          <input
            type="text"
            {...register("phone")}
            className="w-full p-2 border border-purple-700 rounded"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Cargo Pretendido</label>
          <select
            {...register("position")}
            className="w-full p-2 border border-purple-700 rounded"
          >
            <option value="">Selecione...</option>
            <option value="Desenvolvedor Frontend">
              Desenvolvedor Frontend
            </option>
            <option value="Desenvolvedor Backend">Desenvolvedor Backend</option>
            <option value="Desenvolvedor Full Stack">
              Desenvolvedor Full Stack
            </option>
            <option value="Desenvolvedor Mobile">Desenvolvedor Mobile</option>
            <option value="Desenvolvedor de Software">
              Desenvolvedor de Software
            </option>
            <option value="Engenheiro de Software">
              Engenheiro de Software
            </option>
            <option value="Arquiteto de Software">Arquiteto de Software</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Analista de Sistemas">Analista de Sistemas</option>
            <option value="Analista Programador">Analista Programador</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="Engenheiro de Dados">Engenheiro de Dados</option>
            <option value="QA Engineer">QA Engineer</option>
            <option value="Scrum Master">Scrum Master</option>
            <option value="Product Owner">Product Owner</option>
          </select>
          {errors.position && (
            <p className="text-red-500 text-sm">{errors.position.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">LinkedIn (opcional)</label>
          <input
            type="text"
            {...register("linkedin")}
            className="w-full p-2 border border-purple-700 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">GitHub (opcional)</label>
          <input
            type="text"
            {...register("github")}
            className="w-full p-2 border border-purple-700 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-700 text-white p-2 rounded"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default MemberForm;
