export type Alimento = "carne" | "frango" | "paoAlho" | "linguica";

export const quantidadePessoas: Record<Alimento, number> = {
  carne: 400,
  frango: 200,
  paoAlho: 100,
  linguica: 200,
};

export const nomesAlimentos: Record<string, string> = {
  carne: "Carne",
  frango: "Frango",
  paoAlho: "Pão de Alho",
  linguica: "Linguiça",
};
