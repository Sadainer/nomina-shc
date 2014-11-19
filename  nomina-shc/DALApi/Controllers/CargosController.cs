using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http.Description;
using System.Web.Http.Cors;
using System.Net.Http;
using System.Web.Http;
using DTO;
using NominaBLL;

namespace DALApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/cargos")]
    public class CargosController : ApiController
    {
        CargosBLL CargBLL = new CargosBLL();
        // GET api/cargos
        [Route("todos")]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/cargos/5
        [Route("{IdDpto}")]
        public IHttpActionResult Get(string IdDpto)
        {
            List<CargosDTO> Dpto = CargBLL.Get(IdDpto);

            if (Dpto.Count == 0)
            {
                return NotFound();
            }
            return Ok(Dpto);
        }

        // POST api/cargos
        public void Post([FromBody]string value)
        {
        }

        // PUT api/cargos/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/cargos/5
        public void Delete(int id)
        {
        }
    }
}
