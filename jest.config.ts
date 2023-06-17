import type { Config } from "jest";
import { defaults as tsjPreset } from "ts-jest/presets";
const config: Config = {
  testEnvironment: "node",
  collectCoverage: true,
  transform: {
    ...tsjPreset.transform,
    "/test/.*\\.spec\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  coverageReporters: ["lcov", "html"],
  collectCoverageFrom: ["src/**/*"],
  testRegex: "/test/.*\\.spec\\.tsx?$",
};
export default config;
