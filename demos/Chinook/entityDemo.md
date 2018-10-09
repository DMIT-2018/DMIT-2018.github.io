---
title: Entities Demo
---
# Creating Entities

```csharp
[Table("Albums")]
public class Album
{
    [Key]
    public int AlbumId { get; set; }

    [Required(ErrorMessage = "Album Title is required.")]
    [StringLength(160, ErrorMessage = "Album title has a maximum of 160 characters")]
    public string Title { get; set; }
    public int ArtistId { get; set; }
    public int ReleaseYear { get; set; }

    [StringLength(50, ErrorMessage = "Album Label has a maximum of 50 characters")]
    public string ReleaseLabel { get; set; }

    //navigational properties
    public virtual Artist Artist { get; set; }
    public virtual ICollection<Track> Tracks { get; set; }

}
```

```csharp
[Table("Artists")]
public class Artist
{
    [Key]
    public int ArtistId { get; set; }

    [StringLength(120, ErrorMessage ="Artist Name has a maximum of 120 characters")]
    public string Name { get; set; }

    //navigational properties
    public virtual ICollection<Album> Albums { get; set; }
}
```

```csharp
[Table("Tracks")]
public class Track
{
    [Key]
    public int TrackId { get; set; }

    [Required(ErrorMessage = "Track Name is required.")]
    [StringLength(200, ErrorMessage = "Track Name has a maximum of 200 characters")]
    public string Name { get; set; }
    public int? AlbumId { get; set; }
    public int MediaTypeId { get; set; }
    public int? GenreId { get; set; }
    [StringLength(220, ErrorMessage = "composer has a maximum of 220 characters")]
    public string Composer { get; set; }
    public int Milliseconds { get; set; }
    public int? Bytes { get; set; }
    public decimal UnitPrice { get; set; }

    //Navigational properties
    public virtual Album Album { get; set; }
}
```

```csharp
internal class ChinookContext:DbContext
{
    //name holds the name value of your web connection string
    public ChinookContext():base("name=ChinookDB")
    {

    }

    //a reference to each table in the database as a virtual data set
    public virtual DbSet<Artist> Artists { get; set; }
    public virtual DbSet<Album> Albums { get; set; }
    public virtual DbSet<Track> Tracks { get; set; }
}
```