using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Http.Cors;
using NominaBLL;
using DTO;

namespace DALApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/dpto")]
    public class DptoController : ApiController
    {
        DptoBLL DptBLL = new DptoBLL();
        // GET api/dpto
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

         //GET api/dpto/5
        [Route("{Nit}")]
        public IHttpActionResult Get(String Nit)
        {
            List<DepartamentosDTO> Dpto = DptBLL.Get(Nit);

            if (Dpto.Count == 0)
            {
                return NotFound();
            }
            return Ok(Dpto);
        }

        // POST api/dpto
        public void Post([FromBody]string value)
        {
        }

        // PUT api/dpto/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/dpto/5
        public void Delete(int id)
        {
        }
    }
}
