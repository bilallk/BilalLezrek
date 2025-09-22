using BlBackend.Data;
using BlBackend.Models.Feature;
using BlBackend.Repositories.Feature;
using Microsoft.EntityFrameworkCore;

namespace BlBackend.Repositories
{
    public class FeatureRepository : IFeatureRepository
    {
        private readonly AppDbContext _context;

        public FeatureRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<FeatureEntity>> GetAllAsync()
        {
            return await _context.Features.ToListAsync();
        }

        public async Task<FeatureEntity?> GetByIdAsync(int id)
        {
            return await _context.Features.FindAsync(id);
        }

        public async Task AddAsync(FeatureEntity feature)
        {
            _context.Features.Add(feature);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(FeatureEntity feature)
        {
            _context.Features.Update(feature);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(FeatureEntity feature)
        {
            _context.Features.Remove(feature);
            await _context.SaveChangesAsync();
        }
    }
}
