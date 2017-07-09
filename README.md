Some helper worksheets for my projects.

The Euler 1D and 3D ones have all the content required to derive fluxes and spectral decomposition of Euler equations in 1D and 3D.
The 1D is redundant, everything in it and more is in the 3D worksheet.
I could stand to tidy up the 3D one for better explicit naming of what the flux is, etc. 
I could also derive the flux for arbitrary normals.
In the CL hydrodynamics project I've found that -- for axis-aligend grids -- swapping vector components (simulating a rotation) and performing the flux in one direction (typically the x axis) makes for more accurate calculations.

For the MHD worksheet I originally tried to use the same approach, but quickly ran into the ugliness of solving the eigensystem of the giant 8x8 matrix.
To circumvent this I took the symmetrization approach, first separating the conservative-to-primitive transform from the flux, combining the source, and applying a symmetrizing change of basis.
Then I gave up and went to Athena, and then I compared that with Ravi's implementation.  The two are basically the same.  So long, Jameson implementation. 

I've also started on a Special Relativistic Euler Equations worksheet.

The ADM stuff is generated from my symmath project.

Here's the CDN URLs:

[ADM Bona-Masso Eigenvectors](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/ADM%20Bona%2dMasso%20Eigenvectors%2ehtml)

[ADM Bona-Masso Inverse Eigenvectors](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/ADM%20Bona%2dMasso%20Inverse%20Eigenvectors%2ehtml)

[ADM connections](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/ADM%20connections%2ehtml)

[Antigravity](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Antigravity%2ehtml)

[BSSNOK 1D](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/BSSNOK%201D%2ehtml)

[Cayley-Dickson](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Cayley%2dDickson%2ehtml)

[Change of Coordinates](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Change%20of%20Coordinates%2ehtml)

[EMHD Hyperbolic Conservation Laws](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/EMHD%20Hyperbolic%20Conservation%20Laws%2ehtml)

[EMHD Linear Stability Analysis](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/EMHD%20Linear%20Stability%20Analysis%2ehtml)

[Electromagnetic Tensor Self-Dual](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Electromagnetic%20Tensor%20Self%2dDual%2ehtml)

[Euler Fluid Equations - Curved Geometry](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Euler%20Fluid%20Equations%20%2d%20Curved%20Geometry%2ehtml)

[Euler Fluid Equations - Eigenmode Analysis 2](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Euler%20Fluid%20Equations%20%2d%20Eigenmode%20Analysis%202%2ehtml)

[Euler Fluid Equations - Eigenmode Analysis](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Euler%20Fluid%20Equations%20%2d%20Eigenmode%20Analysis%2ehtml)

[Euler Fluid Equations - Entropy Function](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Euler%20Fluid%20Equations%20%2d%20Entropy%20Function%2ehtml)

[Finite Volume Methods](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Finite%20Volume%20Methods%2ehtml)

[Gravitation 22.2](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Gravitation%2022%2e2%2ehtml)

[Kaluza-Klein - constant scalar](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Kaluza%2dKlein%20%2d%20constant%20scalar%2ehtml)

[Kaluza-Klein](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Kaluza%2dKlein%2ehtml)

[Kerr Cartesian](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Kerr%20Cartesian%2ehtml)

[LQG](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/LQG%2ehtml)

[MHD - Eigenmode Analysis](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/MHD%20%2d%20Eigenmode%20Analysis%2ehtml)

[MHD](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/MHD%2ehtml)

[Maxwell Equations - Eigenmode Analysis](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Maxwell%20Equations%20%2d%20Eigenmode%20Analysis%2ehtml)

[Maxwell equations in hyperbolic form](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Maxwell%20equations%20in%20hyperbolic%20form%2ehtml)

[Metric Eigenmodes](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Metric%20Eigenmodes%2ehtml)

[Metric with geodesic that changes in space with velocity in time](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Metric%20with%20geodesic%20that%20changes%20in%20space%20with%20velocity%20in%20time%2ehtml)

[Navier-Stokes](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Navier%2dStokes%2ehtml)

[Numerical Relativity/1_intro](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Numerical%20Relativity%2f1_intro%2ehtml)

[Numerical Relativity/2_hyperbolic](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Numerical%20Relativity%2f2_hyperbolic%2ehtml)

[Numerical Relativity/3_adm_hyp_full](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Numerical%20Relativity%2f3_adm_hyp_full%2ehtml)

[Numerical Relativity/adm_to_efe](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Numerical%20Relativity%2fadm_to_efe%2ehtml)

[Numerical Relativity/bssnok](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Numerical%20Relativity%2fbssnok%2ehtml)

[Numerical Relativity/eigenwhatever](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Numerical%20Relativity%2feigenwhatever%2ehtml)

[Numerical Relativity/equal_up_to_principle_part](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Numerical%20Relativity%2fequal_up_to_principle_part%2ehtml)

[Numerical Relativity/z4_hyp_full](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Numerical%20Relativity%2fz4_hyp_full%2ehtml)

[Relativistic Electromagnetism metric](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Relativistic%20Electromagnetism%20metric%2ehtml)

[SRHD](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/SRHD%2ehtml)

[Solving Connections From Riemann](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Solving%20Connections%20From%20Riemann%2ehtml)

[Tetrad General Relativity](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Tetrad%20General%20Relativity%2ehtml)

[spheres](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/spheres%2ehtml)

[wave_metric_1](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/wave_metric_1%2ehtml)

[wave_metric_2](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/wave_metric_2%2ehtml)

[wave_metric_3](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/wave_metric_3%2ehtml)
