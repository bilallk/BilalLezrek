using System.ComponentModel.DataAnnotations;

namespace BlBackend.Models.Feature
{
    public class FeatureEntity
    {
        [Key]
        public int FeatureId { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }
        public required FeatureType Type { get; set; }
        public string? Icon { get; set; }
        public string? Link { get; set; }
        public bool IsEnabled { get; set; }
    }

    public enum FeatureType
    {
        Game,
        Information,
        Utility,
        Test,
        Planning
    }
}

