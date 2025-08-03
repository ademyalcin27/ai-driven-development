import { posts } from "../../db/drizzle-schema";

export default defineTask({
  meta: {
    name: "seed:posts",
    description: "Seed Posts",
  },
  async run() {
    const db = useDb();
    const now = Math.floor(Date.now() / 1000);
    await db.insert(posts).values([
      {
        title: "Hello World",
        content: "This is the first dummy post.",
        createdAt: now,
        updatedAt: now,
      },
      {
        title: "Second Post",
        content: "Another example post for seeding.",
        createdAt: now,
        updatedAt: now,
      },
      {
        title: "Nuxt + Drizzle",
        content: "Seeding data is easy with Nitro tasks!",
        createdAt: now,
        updatedAt: now,
      },
    ]);
    return { result: "Success" };
  },
});
