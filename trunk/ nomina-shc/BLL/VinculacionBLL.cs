using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DAL;
using DAL.Modelo;
using DTO;

namespace NominaBLL
{
    public class VinculacionBLL
    {
        VinculacionDAL Dal = new VinculacionDAL();
        public string NuevoEmpleado(VinculacionDTO value)
        {
            string res = "Error al guardar";
            vinculaciones em = new vinculaciones();
            Mapper.CreateMap<VinculacionDTO, vinculaciones>();
            Mapper.Map(value, em);
            if (Dal.NuevaVinculacion(em))
            {
                res = "Vinculacion registrada";
            }
            return res;

        }

    }
}


