import type { T_lettersLowerCase } from "@techandtribal/maximilian";

type X = `${ "X" | " " }`;
type ROW = `${ X }${ X }${ X }${ X }${ X }`;
export type T_blockMap = [ROW, ROW, ROW, ROW, ROW];
export type T_character = T_lettersLowerCase | " ";
type T_allowedChars = T_lettersLowerCase | "space";
type T_characters = Record<T_allowedChars, T_blockMap>;

export const characters: T_characters = {
	a: [
		"XXXXX",
		"XXXXX",
		"XXXXX",
		"XXXXX",
		"XXXXX"
	],
	b: [
		"XXXX ",
		"X   X",
		"XXXX ",
		"X   X",
		"XXXX "
	],
	c: [
		"XXXXX",
		"X    ",
		"X    ",
		"X    ",
		"XXXXX"
	],
	d: [
		"XXXX ",
		"X   X",
		"X   X",
		"X   X",
		"XXXX "
	],
	e: [
		"XXXXX",
		"X    ",
		"XXXXX",
		"X    ",
		"XXXXX"
	],
	f: [
		"XXXXX",
		"X    ",
		"XXXXX",
		"X    ",
		"X    "
	],
	g: [
		"XXXXX",
		"X    ",
		"X XXX",
		"X   X",
		"XXXXX"
	],
	h: [
		"X   X",
		"X   X",
		"XXXXX",
		"X   X",
		"X   X"
	],
	i: [
		"XXXXX",
		"  X  ",
		"  X  ",
		"  X  ",
		"XXXXX"
	],
	j: [
		"XXXXX",
		"  X  ",
		"  X  ",
		"X X  ",
		"XXX  "
	],
	k: [
		"X   X",
		"X  X ",
		"XXX  ",
		"X  X ", 
		"X   X"
	],
	l: [
		"X    ",
		"X    ",
		"X    ",
		"X    ",
		"XXXXX"
	],
	m: [
		"XX XX",
		"X X X",
		"X X X",
		"X   X",
		"X   X"
	],
	n: [
		"X   X",
		"XX  X",
		"X X X",
		"X  XX",
		"X   X"
	],
	o: [
		" XXX ",
		"X   X",
		"X   X",
		"X   X",
		" XXX "
	],
	p: [
		"XXXX ",
		"X   X",
		"XXXX ",
		"X    ",
		"X    "
	],
	q: [
		" XXX ",
		"X   X",
		"X X X",
		"X  XX",
		" XXX "
	],
	r: [
		"XXXX ",
		"X   X",
		"XXXX ",
		"X X  ",
		"X XXX"
	],
	s: [
		"XXXXX",
		"X    ",
		"XXXXX",
		"    X",
		"XXXXX"
	],
	t: [
		"XXXXX",
		"  X  ",
		"  X  ",
		"  X  ",
		"  X  "
	],
	u: [
		"X   X",
		"X   X",
		"X   X",
		"X   X",
		"XXXXX"
	],
	v: [
		"X   X",
		"X   X",
		" X X ",
		" X X ",
		"  X  "
	],
	w: [
		"X X X",
		"X X X",
		"X X X",
		"X X X",
		" X X "
	],
	x: [
		"X   X",
		" X X ",
		"  X  ",
		" X X ",
		"X   X"
	],
	y: [
		"X   X",
		"X   X",
		" XXX ",
		"  X  ",
		"  X  "
	],
	z: [
		"XXXXX",
		"   X ",
		"  X  ",
		" X   ",
		"XXXXX"
	],
	space: [
		"     ",
		"     ",
		"     ",
		"     ",
		"     "
	]
};
