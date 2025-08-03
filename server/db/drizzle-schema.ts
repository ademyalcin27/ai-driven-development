import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const posts = sqliteTable("posts", {
  id: integer("id").primaryKey(),
  title: text("title"),
  content: text("content"),
  createdAt: integer("created_at"),
  updatedAt: integer("updated_at"),
});
