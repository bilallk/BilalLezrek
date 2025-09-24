using AutoMapper;
using BlBackend.Models.Feature;
using BlBackend.Repositories;
using BlBackend.Repositories.Feature;
using FluentValidation;

namespace BlBackend.Services
{
    public class FeatureService : IFeatureService
    {
        private readonly IFeatureRepository _repository;
        private readonly IValidator<FeatureDto.Mutate> _validator;
        private readonly IMapper _mapper;

        public FeatureService(IFeatureRepository repository, IValidator<FeatureDto.Mutate> validator, IMapper mapper)
        {
            _repository = repository;
            _validator = validator;
            _mapper = mapper;
        }

        public async Task<List<FeatureDto.Index>> GetAllAsync()
        {
            var features = await _repository.GetAllAsync();
            return _mapper.Map<List<FeatureDto.Index>>(features);
        }

        public async Task<FeatureDto.Index?> GetByIdAsync(int id)
        {
            var feature = await _repository.GetByIdAsync(id);
            return feature == null ? null : _mapper.Map<FeatureDto.Index>(feature);
        }

        public async Task<(bool Success, List<string> Errors, FeatureDto.Index? Created)> CreateAsync(FeatureDto.Mutate dto)
        {
            var result = _validator.Validate(dto);
            if (!result.IsValid)
                return (false, result.Errors.Select(e => e.ErrorMessage).ToList(), null);

            var feature = _mapper.Map<FeatureEntity>(dto);
            await _repository.AddAsync(feature);

            return (true, new List<string>(), _mapper.Map<FeatureDto.Index>(feature));
        }

        public async Task<bool> UpdateAsync(int id, FeatureDto.Mutate dto)
        {
            var feature = await _repository.GetByIdAsync(id);
            if (feature == null) return false;

            _mapper.Map(dto, feature);
            await _repository.UpdateAsync(feature);
            return true;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var feature = await _repository.GetByIdAsync(id);
            if (feature == null) return false;

            await _repository.DeleteAsync(feature);
            return true;
        }

        public async Task<bool> ToggleEnabledAsync(int id)
        {
            var feature = await _repository.GetByIdAsync(id);
            if (feature == null) return false;
            feature.IsEnabled = !feature.IsEnabled;
            await _repository.UpdateAsync(feature);
            return true;
        }
    }
}
