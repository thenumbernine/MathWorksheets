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

[ADM Bona-Masso Eigenvectors](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/ADM%20Bona%2dMasso%20Eigenvectors%2ehtml)

[ADM Bona-Masso Inverse Eigenvectors](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/ADM%20Bona%2dMasso%20Inverse%20Eigenvectors%2ehtml)

[ADM connections](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/ADM%20connections%2ehtml)

[Antigravity](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Antigravity%2ehtml)

[BSSNOK 1D](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/BSSNOK%201D%2ehtml)

[Cayley-Dickson](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Cayley%2dDickson%2ehtml)

[Change of Coordinates](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Change%20of%20Coordinates%2ehtml)

[EMHD Hyperbolic Conservation Laws](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/EMHD%20Hyperbolic%20Conservation%20Laws%2ehtml)

[EMHD Linear Stability Analysis](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/EMHD%20Linear%20Stability%20Analysis%2ehtml)

[Electromagnetic Tensor Self-Dual](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Electromagnetic%20Tensor%20Self%2dDual%2ehtml)

[Euler Fluid Equations - Curved Geometry](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Euler%20Fluid%20Equations%20%2d%20Curved%20Geometry%2ehtml)

[Euler Fluid Equations - Eigenmode Analysis](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Euler%20Fluid%20Equations%20%2d%20Eigenmode%20Analysis%2ehtml)

[Euler Fluid Equations - Entropy Function](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Euler%20Fluid%20Equations%20%2d%20Entropy%20Function%2ehtml)

[Gravitation 22.2](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Gravitation%2022%2e2%2ehtml)

[Kaluza-Klein](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Kaluza%2dKlein%2ehtml)

[Kerr Cartesian](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Kerr%20Cartesian%2ehtml)

[LQG](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/LQG%2ehtml)

[MHD](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/MHD%2ehtml)

[Maxwell equations in hyperbolic form](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Maxwell%20equations%20in%20hyperbolic%20form%2ehtml)

[Metric with geodesic that changes in space with velocity in time](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Metric%20with%20geodesic%20that%20changes%20in%20space%20with%20velocity%20in%20time%2ehtml)

[Navier-Stokes](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Navier%2dStokes%2ehtml)

[Numerical Relativity/1_intro](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Numerical%20Relativity%2f1_intro%2ehtml)

[Numerical Relativity/2_hyperbolic](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Numerical%20Relativity%2f2_hyperbolic%2ehtml)

[Numerical Relativity/3_adm_hyp_full](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Numerical%20Relativity%2f3_adm_hyp_full%2ehtml)

[Numerical Relativity/adm_to_efe](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Numerical%20Relativity%2fadm_to_efe%2ehtml)

[Numerical Relativity/eigenwhatever](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Numerical%20Relativity%2feigenwhatever%2ehtml)

[Numerical Relativity/equal_up_to_principle_part](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Numerical%20Relativity%2fequal_up_to_principle_part%2ehtml)

[Numerical Relativity/z4_hyp_full](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Numerical%20Relativity%2fz4_hyp_full%2ehtml)

[Relativistic Electromagnetism metric](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Relativistic%20Electromagnetism%20metric%2ehtml)

[SRHD](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/SRHD%2ehtml)

[Solving Connections From Riemann](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Solving%20Connections%20From%20Riemann%2ehtml)

[Tetrad General Relativity](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/Tetrad%20General%20Relativity%2ehtml)

[spheres](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/spheres%2ehtml)

[wave_metric_1](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/wave_metric_1%2ehtml)

[wave_metric_2](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/wave_metric_2%2ehtml)

[wave_metric_3](https://cdn.rawgit.com/thenumbernine/MathWorksheets/42be2e0e/wave_metric_3%2ehtml)
