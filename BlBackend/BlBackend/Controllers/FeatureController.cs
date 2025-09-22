using BlBackend.Models.Feature;
using BlBackend.Services;
using Microsoft.AspNetCore.Mvc;

namespace BlBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeatureController : ControllerBase
    {
        private readonly IFeatureService _service;

        public FeatureController(IFeatureService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _service.GetAllAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var feature = await _service.GetByIdAsync(id);
            if (feature == null) return NotFound();
            return Ok(feature);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] FeatureDto.Mutate dto)
        {
            var (success, errors, created) = await _service.CreateAsync(dto);
            if (!success) return BadRequest(errors);
            return CreatedAtAction(nameof(GetById), new { id = created!.FeatureId }, created);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] FeatureDto.Mutate dto)
        {
            var updated = await _service.UpdateAsync(id, dto);
            if (!updated) return NotFound();
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deleted = await _service.DeleteAsync(id);
            if (!deleted) return NotFound();
            return Ok(new { Message = $"Feature {id} deleted." });
        }
    }
}
