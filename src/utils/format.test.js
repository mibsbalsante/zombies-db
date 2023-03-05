import { describe, it, expect } from "vitest"

import { formatDate } from "./format"

describe("@utl/format", () => {
  it("should format a date to mm/dd/yyyy", () => {
    const now = new Date(2023, 1, 2).toString()
    const date = formatDate(now)

    expect(date).toEqual("2/2/2023")
  })

  it("should return 'Unknown' if date is invalid", () => {
    expect(formatDate("string")).toEqual("Unknown")
  })
})
