using BlBackend.Models.Feature;

namespace BlBackend.Services
{
    public interface IFeatureService
    {
        Task<List<FeatureDto.Index>> GetAllAsync();
        Task<FeatureDto.Index?> GetByIdAsync(int id);
        Task<(bool Success, List<string> Errors, FeatureDto.Index? Created)> CreateAsync(FeatureDto.Mutate dto);
        Task<bool> UpdateAsync(int id, FeatureDto.Mutate dto);
        Task<bool> DeleteAsync(int id);
    }
}
