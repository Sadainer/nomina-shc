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
    public class DptoBLL
    {
        DptoDAL Dal = new DptoDAL();
        public List<DepartamentosDTO> Get(string Nit)
        {
            List<DepartamentosDTO> dpto = new List<DepartamentosDTO>();
            Mapper.CreateMap<departamentos, DepartamentosDTO>();
            Mapper.Map(Dal.Get(Nit), dpto);
            return dpto;

        }

    }
}


