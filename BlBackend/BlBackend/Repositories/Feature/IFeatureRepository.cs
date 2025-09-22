using BlBackend.Models.Feature;

namespace BlBackend.Repositories.Feature
{
    public interface IFeatureRepository
    {
        Task<List<FeatureEntity>> GetAllAsync();
        Task<FeatureEntity?> GetByIdAsync(int id);
        Task AddAsync(FeatureEntity feature);
        Task UpdateAsync(FeatureEntity feature);
        Task DeleteAsync(FeatureEntity feature);
    }
}
