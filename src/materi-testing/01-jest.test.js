import { penjumlahan, perkalian } from "./angka";
import { potonganPajak, sapaan } from "./text";

describe("Group Testing Angka", () => {
  test("Menjumlahkan nilai", () => {
    expect(1 + 1).toBe(2);
  });

  test("Fungsi penjumlahan", () => {
    expect(penjumlahan(3, 2)).toBe(5);
    expect(penjumlahan(4, 8)).toBe(12);
    expect(penjumlahan(7, 1)).toBe(8);
  });

  it("Fungsi perkalian", () => {
    expect(perkalian(3, 2)).toBe(6);
    expect(perkalian(5, 3)).toBe(15);
  });
});

describe("Group Testing Text/String", () => {
  it("Mengetahui gaji bersih di kurangi pajak", () => {
    expect(potonganPajak(10000000)).toBe(`Gaji bersih anda Rp${9000000}`);
  });

  it("Menyapa nama", () => {
    expect(sapaan("Prawito")).toBe("Hallo Prawito");
  });
});
