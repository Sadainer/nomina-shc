using DTO;
using NominaBLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;

namespace DALApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/vinculacion")]
    public class VinculacionController : ApiController
    {
        VinculacionBLL NomBLL = new VinculacionBLL();
        // GET api/vinculacion
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/vinculacion/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/vinculacion
        [ResponseType(typeof(VinculacionDTO))]
        [Route("")]
        [HttpPost]
        public string Post(VinculacionDTO value)
        {
            return NomBLL.NuevoEmpleado(value);
        }

        // PUT api/vinculacion/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/vinculacion/5
        public void Delete(int id)
        {
        }
    }
}
