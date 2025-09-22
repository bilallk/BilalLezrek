using FluentValidation;

namespace BlBackend.Models.Feature
{
    public static class FeatureDto
    {
        public class Index
        {
            public int FeatureId { get; set; }
            public required string Name { get; set; }
            public required string Description { get; set; }
            public required FeatureType Type { get; set; }
            public string? Icon { get; set; }
            public string? Link { get; set; }
            public bool IsEnabled { get; set; }
        }
        public class Mutate
        {
            public required string Name { get; set; }
            public required string Description { get; set; }
            public required FeatureType Type { get; set; }
            public string? Icon { get; set; }
            public string? Link { get; set; }
            public bool IsEnabled { get; set; }
        }
        public class Validator : AbstractValidator<Mutate>
        {
            public Validator()
            {
                RuleFor(x => x.Name)
                    .NotEmpty().WithMessage("Name is required.")
                    .MaximumLength(100).WithMessage("Name cannot exceed 100 characters.");

                RuleFor(x => x.Description)
                    .NotEmpty().WithMessage("Description is required.")
                    .MaximumLength(500).WithMessage("Description cannot exceed 500 characters.");

                RuleFor(x => x.Icon)
                    .MaximumLength(200).WithMessage("Icon URL cannot exceed 200 characters.");

                RuleFor(x => x.Link)
                    .MaximumLength(200).WithMessage("Link URL cannot exceed 200 characters.");
            }
        }
    }
}
