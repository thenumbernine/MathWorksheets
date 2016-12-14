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

[ADM Bona-Masso Eigenvectors](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/ADM%20Bona-Masso%20Eigenvectors.html)
[ADM Bona-Masso Inverse Eigenvectors](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/ADM%20Bona-Masso%20Inverse%20Eigenvectors.html)
[ADM connections](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/ADM%20connections.html)
[Antigravity](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/Antigravity.html)
[BSSNOK 1D](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/BSSNOK%201D.html)
[Electromagnetic Tensor Self-Dual](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/Electromagnetic%20Tensor%20Self-Dual.html)
[EMHD Eigenmode Analysis](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/EMHD%20Eigenmode%20Analysis.html)
[EMHD Linear Stability Analysis](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/EMHD%20Linear%20Stability%20Analysis.html)
[Euler Fluid Equations - Curved Geometry](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/Euler%20Fluid%20Equations%20-%20Curved%20Geometry.html)
[Euler Fluid Equations - Eigenmode Analysis](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/Euler%20Fluid%20Equations%20-%20Eigenmode%20Analysis.html)
[Euler Fluid Equations - Entropy Function](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/Euler%20Fluid%20Equations%20-%20Entropy%20Function.html)
[Gravitation 22.2](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/Gravitation%2022.2.html)
[Kerr Cartesian](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/Kerr%20Cartesian.html)
[LQG](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/LQG.html)
[Maxwell](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/Maxwell.html)
[Metric with geodesic that changes in space with velocity in time](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/Metric%20with%20geodesic%20that%20changes%20in%20space%20with%20velocity%20in%20time.html)
[MHD](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/MHD.html)
[Navier-Stokes](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/Navier-Stokes.html)
[Numerical Relativity Eigenfields 2](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/Numerical%20Relativity%20Eigenfields%202.html)
[Numerical Relativity Eigenfields](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/Numerical%20Relativity%20Eigenfields.html)
[Relativistic Electromagnetism metric](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/Relativistic%20Electromagnetism%20metric.html)
[spheres](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/spheres.html)
[SRHD](https://cdn.rawgit.com/thenumbernine/MathWorksheets/master/SRHD.html)
