---
title: Business Rule Violations
---
# Business Rule Violations

Create a class to represent business rules that may be violated.

```csharp
[Serializable]
public class BusinessRuleException : Exception
{
    public List<string> RuleDetails { get; set; }
    public BusinessRuleException(string message, List<string> reasons)
        : base(message)
    {
        this.RuleDetails = reasons;
    }
}
```
