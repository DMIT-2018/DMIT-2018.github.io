---
title: C# Program in LinqPad
---
# C# Program

The Program context in LinqPad allows you to create more complex C# code snippets. The Program context gives you a `Main()` method and allows you to create additional methods and/or classes.

## Menu Items by Category

```csharp
void Main()
{
  var data = from cat in MenuCategories
        orderby cat.Description
        select new Category()
        {
        Description = cat.Description,
        MenuItems = from item in cat.Items
              where item.Active
              orderby item.Description
              select new MenuItem()
              {
                Description = item.Description,
                Price = item.CurrentPrice,
                Calories = item.Calories,
                Comment = item.Comment
              }
      };
  data.Dump();
}
// Define other methods and classes here
public class Category
{
    public string Description { get;set;}
  public IEnumerable MenuItems { get;set;}
}
public class MenuItem
{
  public string Description { get;set;}
  public decimal Price { get;set;}
  public int? Calories {get;set;}
  public string Comment { get;set;}
}
```

![Program example 1 - Results](LinqPad/results/Program-1.png)
