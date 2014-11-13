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
    [RoutePrefix("api/empleado")]
    public class EmpleadoController : ApiController
    {
        EmpleadoBLL NomBLL = new EmpleadoBLL();
        // GET api/empleado
        [Route("")]
        public List<EmpleadosDTO> Get()
        {
            return NomBLL.GetEmpleados();
            
            //return new string[] { "value1", "value2" };
        }

        // GET api/empleado/5
        [ResponseType(typeof(EmpleadosDTO))]
        [Route("{id:int}")]
        public IHttpActionResult Get(int id)
        {
            EmpleadosDTO Emp = NomBLL.GetEmple(id);
            
            if (Emp.idEmpleado == 0)
            {
                return NotFound();
            }

            return Ok(Emp);
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
