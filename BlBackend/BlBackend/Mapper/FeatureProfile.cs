using AutoMapper;
using BlBackend.Models.Feature;

namespace BlBackend.Mapper
{
    public class FeatureProfile : Profile
    {
        public FeatureProfile()
        {
            // Model -> DTO
            CreateMap<FeatureEntity, FeatureDto.Index>()
                .ForMember(dest => dest.FeatureId, opt => opt.MapFrom(src => src.FeatureId));

            // DTO -> Model
            CreateMap<FeatureDto.Mutate, FeatureEntity>()
                .ForMember(dest => dest.FeatureId, opt => opt.Ignore());
        }
    }
}
