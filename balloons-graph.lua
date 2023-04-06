#!/usr/bin/env lua
require 'ext'
local gnuplot = require 'gnuplot'
local json = require 'dkjson'

local elements = assert(json.decode(
	assert(file'PeriodicTable.js':read())
		:split'\n':sub(2):concat'\n'	-- remove the first line
))

--[[ only elements with resistivity
local res = table(elements):filter(function(e) return e.resistivity end)
print(#res)
--]]

-- [[ only gaseous (at room temp?) elements
local gas = table(elements):filter(function(e) return e.phase == 'Gas' end)
print(#gas)
--]]

local kB_in_kg_m2_per_K_s2 = 1.380649e-23
local NA_in_1_per_mol = 6.02214076e+23

-- P = rho Rspec T
-- [kg / (m s^2)] = [kg / m^3] [m^2 / (K s^2)] [K]

local function K_to_C(K) return K - 273.15 end
local function C_to_K(C) return C + 273.15 end

local T_in_K = C_to_K(15)

for _,log in ipairs{'', 'y'} do
	local plots = {
		terminal = 'png size 800,600 font "Helvetica,10"',
		output = 'balloons-gasses'..(log=='y' and '-log' or '')..'.png',
		title = 'ideal gas law of gaseous elements ('
			..(log=='y' and 'log/lin' or 'lin/lin')
			..') at T = '..K_to_C(T_in_K)..' C',
		log = log == 'y' and 'y' or nil,
		xrange={0,10},
		xlabel = 'rho (kg/m3)',
		ylabel = 'P (kg/ms2)',
	}
	for _,e in ipairs(gas) do
		local relative_atomic_mass_in_g_per_mol = e.atomic_mass	-- but is it really?
		local molar_mass_in_kg_per_mol = relative_atomic_mass_in_g_per_mol * 0.9999999996530e-3 
		local molecular_mass_in_kg_per_mol = molar_mass_in_kg_per_mol	-- but is it really?
		local molecular_mass_in_kg = molecular_mass_in_kg_per_mol / NA_in_1_per_mol
		local Rspec_in_m2_per_K_s2 = kB_in_kg_m2_per_K_s2 / molecular_mass_in_kg
--Rspec_in_m2_per_K_s2 = 287.058	-- for dry air
-- air, at rho=1.225 kg/m^3, has P=101,325 Pa
		table.insert(plots, {'x * '..Rspec_in_m2_per_K_s2 * T_in_K, title=e.name..' (Rspec = '..('%.3e'):format(Rspec_in_m2_per_K_s2)..' m2 / K s2)'})
	end
	gnuplot(plots)
end
