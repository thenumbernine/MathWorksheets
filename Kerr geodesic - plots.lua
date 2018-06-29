#!/usr/bin/env lua
require 'ext'
local gnuplot = require 'gnuplot'
local matrix = require 'matrix'

local M = 1
local theta = 0
local function Delta(r,a)
	return r^2 - 2*M*r + a^2
end
local function Sigma(r,a)
	return r^2 + a^2*math.cos(theta)^2
end
local norm_n_func = Delta / Sigma

-- [[ graph 1D |e_r|
local a = .5
-- r_plus = M + math.sqrt(M^2 - a^2)
-- r_minus = M + math.sqrt(M^2 - a^2)
-- for M = 1 and a = .5 this is about .2 to 1.8
local rs = matrix(range(0, 2, .01))
local norm_ns = rs:map(function(r) return norm_n_func(r,a) end)
gnuplot{
	output = 'Kerr geodesic - radial normal magnitude.png',
	style = 'data lines',
	xlabel = 'r',
	ylabel = '|e_r|',
	data = {rs, norm_ns},
	{using='1:2', title='a='..a},
}
--]]

-- [[ graph of all r's and a's
local rs = matrix(range(0, 2, .025))
local as = matrix(range(.25, 2, .025))
local norm_ns = matrix{#rs,#as}:lambda(function(i,j)
	return Delta(rs[i],as[j]) / Sigma(rs[i],as[j])
end)
gnuplot{
	output = 'Kerr geodesic - radial normal magnitude - varying a.png',
	style = 'data lines',
	--log = 'z',
	pm3d = true,
	contour = 'surface',
	--cntrparam = 'levels 15',
	xlabel = 'r',
	ylabel = 'a',
	griddata = {x=rs, y=as, norm_ns},
	{splot=true, using='1:2:3', title='|e_r|'},
}
--]]
