import { describe, it, expect } from "vitest"
import { render } from "@testing-library/react"

import Header from "."

describe("@cmp/Header", () => {
  it("should mount", () => {
    const { getByText } = render(<Header />)
    expect(getByText("Survivor's List")).toBeTruthy()
  })
})
