import { vi, expect, afterEach } from "vitest"
import { cleanup } from "@testing-library/react"
import matchers from "@testing-library/jest-dom/matchers"

expect.extend(matchers)

global.fetch = vi.fn(() =>
  Promise.resolve({
    status: 200,
    json: () => Promise.resolve({ value: [{ contentUrl: "url" }] }),
  })
)

afterEach(() => {
  cleanup()
})
