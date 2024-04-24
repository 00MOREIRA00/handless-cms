import { createClient } from "next-sanity";

export const client = createClient({
    projectId: 'codigoTeste', //Codigo identificador do projeto
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false
});