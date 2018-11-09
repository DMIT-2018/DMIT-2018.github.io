---
title: Install SSDT
---
# Installing Sql Server Data Tools (SSDT) for VS 2017

# Part A – Install SSDT for Visual Studio 2017

1. Ensure that your version of VS 2017 is the 15.6.0 release (or higher). You can find this when checking under the Help menu and About Microsoft Visual Studio.
2. Ensure that all instances of VS 2017 are closed.
3. Go to <https://docs.microsoft.com/en-us/sql/ssdt/download-sql-server-data-tools-ssdt?view=sql-server-2017>
4. Run SSDT-Setup-ENU.exe
    - ![](./media/image1.png)
5. Acknowledge, press Next
6. Install against the VS Community or Enterprise instance.
7. Press Install

## Part B – Add Rdlc Report Designer Extension to VS 2017

1. Open Visual Studio 2017
2. From the menu chose Tools Extensions and Updates...
3. Select Online. Search using report. Select Microsoft Rdlc Report Designer for Visual Studio. Download. 
    - ![](./media/image5.png)
    - ![](./media/image6.png)
4. Reopen project. Modify. Press End Tasks until the Installation starts. Install may take awhile. 
    - ![](./media/image7.png)
5. If prompted to close Visual Studio, do so.

## Part C – Use the Report Viewer in your Projects

1. Open a solution with a Web Application project.
2. Open NuGet Manager. Browse. Search for Report. Install `Microsoft.Report.Viewer`.
    - ![](./media/image8.png)
3. The ReportViewer control may or may not be listed in your Toolbox. Ensure the current ReportViewer control is present by doing the following:
    1. Tools - NuGet Package Manager - Package Manager Console
    2. Run the following command  
        - `Install-Package Microsoft.ReportingServices.ReportViewerControl.WinForms -Pre`
    3. Add a new control to the toolbox
        - Right Click on the toolbox under General; select Add Tab; Name it `Reporting`
        - Right click in the new tab; select Choose Items...
        - Click the Browse... button
        - Navigate to your solution directory's packages folder
            - ![](./media/image9.png)
            - ![](./media/image10.png)
4. Right Click project Add New Item. Search report. Select Report Wizard. Press OK. Press Trust.
5. You should be presented with the following form. Drop down Data source. There should be a list of data sources. 
    - ![](./media/image11.png)
6. Press cancel.
7. Report services are now installed.
