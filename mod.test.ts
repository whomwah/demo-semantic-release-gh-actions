import { assertEquals } from "https://deno.land/std@0.162.0/testing/asserts.ts";
import { sayHello } from "./mod.ts";

Deno.test("Says hello world Test", () => {
  assertEquals(sayHello(), "Hello World CHANGE 2");
});
