import fs from "node:fs/promises";
import path from "node:path";

export default function copy() {
  return {
    name: "copy",
    version: "1.0.0",
    async buildEnd() {
      const [src, dest] = await Promise.all([
        Promise.resolve(
          path.resolve(path.join(process.cwd(), "src", "scripts"))
        ),
        Promise.resolve(
          path.resolve(path.join(process.cwd(), "dist", "scripts"))
        ),
      ]);
      await fs.cp(src, dest, { recursive: true });
    },
  };
}
