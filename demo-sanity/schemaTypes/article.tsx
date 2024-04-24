import { defineField, defineType } from "sanity";

export const article = defineType({
    name: "article",
    title: "Article",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Titulo do Artigo",
            type: "string",
            validation: Rule => Rule.required()
        }),
        defineField({
            name: "slug",
            title: "URL do post",
            type: "slug",
            options: { source: 'title'}, 
        }),
        defineField({
            name: "isPublished",
            title: "Publicado",
            type: "boolean",
        }),
    ],
})