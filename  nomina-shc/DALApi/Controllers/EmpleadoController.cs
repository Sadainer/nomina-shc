using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Http.Cors;
using BLL;
using DTO;

namespace DALApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/empleado")]
    public class EmpleadoController : ApiController
    {
        NominaBLL NomBLL = new NominaBLL();
        // GET api/empleado
        [Route("")]
        public List<EmpleadosDTO> Get()
        {
            return NomBLL.GetEmpleados();
            
            //return new string[] { "value1", "value2" };
        }

        // GET api/empleado/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/empleado
        [ResponseType(typeof(EmpleadosDTO))]
        [Route("")]
        [HttpPost]
        public string Post(EmpleadosDTO empleado)
        {
           return NomBLL.NuevoEmpleado(empleado);
        }

        // PUT api/empleado/5
        public void Put(int id, [FromBody]string value)
        {

        }

        // DELETE api/empleado/5
        public void Delete(int id)
        {
        }
    }
}
