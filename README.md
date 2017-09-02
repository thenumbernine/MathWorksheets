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

[ADM Bona-Masso Eigenvectors](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/ADM Bona-Masso Eigenvectors.html)

[ADM Bona-Masso Inverse Eigenvectors](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/ADM Bona-Masso Inverse Eigenvectors.html)

[ADM connections](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/ADM connections.html)

[Antigravity](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Antigravity.html)

[BSSNOK 1D](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/BSSNOK 1D.html)

[Cayley-Dickson](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Cayley-Dickson.html)

[Change of Coordinates](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Change of Coordinates.html)

[EMHD Hyperbolic Conservation Laws](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/EMHD Hyperbolic Conservation Laws.html)

[EMHD Linear Stability Analysis](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/EMHD Linear Stability Analysis.html)

[Electromagnetic Tensor Self-Dual](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Electromagnetic Tensor Self-Dual.html)

[Euler Fluid Equations - Curved Geometry - Contravariant](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Euler Fluid Equations - Curved Geometry - Contravariant.html)

[Euler Fluid Equations - Curved Geometry - Covariant](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Euler Fluid Equations - Curved Geometry - Covariant.html)

[Euler Fluid Equations - Eigenmode Analysis 2](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Euler Fluid Equations - Eigenmode Analysis 2.html)

[Euler Fluid Equations - Eigenmode Analysis](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Euler Fluid Equations - Eigenmode Analysis.html)

[Euler Fluid Equations - Entropy Function](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Euler Fluid Equations - Entropy Function.html)

[Finite Volume Methods](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Finite Volume Methods.html)

[GR EM Metrics/complex metric of EM potential](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/GR EM Metrics/complex metric of EM potential.html)

[GR EM Metrics/complex metric of g + F](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/GR EM Metrics/complex metric of g + F.html)

[GR EM Metrics/complex metric of g + dual F](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/GR EM Metrics/complex metric of g + dual F.html)

[GR EM Metrics/curved space gravitomagnetics](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/GR EM Metrics/curved space gravitomagnetics.html)

[GR EM Metrics/gravitomagnetics](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/GR EM Metrics/gravitomagnetics.html)

[GR EM Metrics/metric of curved space and EM potential](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/GR EM Metrics/metric of curved space and EM potential.html)

[GR EM Metrics/metric of flat space and EM potential](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/GR EM Metrics/metric of flat space and EM potential.html)

[Gravitation 22.2](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Gravitation 22.2.html)

[Kaluza-Klein - constant scalar](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Kaluza-Klein - constant scalar.html)

[Kaluza-Klein](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Kaluza-Klein.html)

[Kerr Cartesian](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Kerr Cartesian.html)

[LQG](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/LQG.html)

[MHD - Eigenmode Analysis](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/MHD - Eigenmode Analysis.html)

[MHD](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/MHD.html)

[Maxwell Equations - Eigenmode Analysis](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Maxwell Equations - Eigenmode Analysis.html)

[Maxwell equations in hyperbolic form](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Maxwell equations in hyperbolic form.html)

[Metric Eigenmodes 2](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Metric Eigenmodes 2.html)

[Metric Eigenmodes](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Metric Eigenmodes.html)

[Metric for extruded dimension](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Metric for extruded dimension.html)

[Metric with geodesic that changes in space with velocity in time](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Metric with geodesic that changes in space with velocity in time.html)

[Navier-Stokes As Exterior Derivative](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Navier-Stokes As Exterior Derivative.html)

[Navier-Stokes](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Navier-Stokes.html)

[Numerical Relativity/1_intro](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Numerical Relativity/1_intro.html)

[Numerical Relativity/2_hyperbolic](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Numerical Relativity/2_hyperbolic.html)

[Numerical Relativity/3_adm_hyp_full](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Numerical Relativity/3_adm_hyp_full.html)

[Numerical Relativity/adm_to_efe](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Numerical Relativity/adm_to_efe.html)

[Numerical Relativity/bssnok](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Numerical Relativity/bssnok.html)

[Numerical Relativity/eigenwhatever](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Numerical Relativity/eigenwhatever.html)

[Numerical Relativity/equal_up_to_principle_part](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Numerical Relativity/equal_up_to_principle_part.html)

[Numerical Relativity/z4_hyp_full](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Numerical Relativity/z4_hyp_full.html)

[Relativistic Electromagnetism metric](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Relativistic Electromagnetism metric.html)

[SRHD](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/SRHD.html)

[Solving Connections From Riemann](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Solving Connections From Riemann.html)

[Tetrad General Relativity](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/Tetrad General Relativity.html)

[spheres](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/spheres.html)

[wave_metric_1](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/wave_metric_1.html)

[wave_metric_2](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/wave_metric_2.html)

[wave_metric_3](https://htmlpreview.github.io/?https://github.com/thenumbernine/MathWorksheets/blob/master/wave_metric_3.html)
